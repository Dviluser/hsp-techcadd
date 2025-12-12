import os
import sys
import shutil
import argparse
from pathlib import Path

def convert_html_to_php(directory_path):
    """
    Convert all .html files in the directory to .php files
    
    Args:
        directory_path (str): Path to the directory containing HTML files
    """
    # Check if directory exists
    if not os.path.exists(directory_path):
        print(f"❌ Error: Directory '{directory_path}' does not exist!")
        return False
    
    if not os.path.isdir(directory_path):
        print(f"❌ Error: '{directory_path}' is not a directory!")
        return False
    
    # Get all HTML files in the directory and subdirectories
    html_files = []
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file.endswith('.html') or file.endswith('.htm'):
                html_files.append(os.path.join(root, file))
    
    if not html_files:
        print(f"ℹ️  No HTML files found in '{directory_path}'")
        return True
    
    print(f"📁 Found {len(html_files)} HTML file(s) to convert:")
    
    # Convert each HTML file to PHP
    converted_count = 0
    for html_file in html_files:
        try:
            # Create new filename with .php extension
            if html_file.endswith('.html'):
                php_file = html_file[:-5] + '.php'
            else:  # .htm
                php_file = html_file[:-4] + '.php'
            
            # Read the HTML file content
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Add PHP opening tag if not present (optional)
            # You can customize this based on your needs
            if '<?php' not in content:
                # Add PHP opening at the beginning if it's pure HTML
                content = '<?php\n// Converted from HTML to PHP\n?>\n' + content
            
            # Write to new PHP file
            with open(php_file, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Remove the original HTML file (optional)
            os.remove(html_file)
            
            print(f"  ✅ Converted: {os.path.basename(html_file)} → {os.path.basename(php_file)}")
            converted_count += 1
            
        except Exception as e:
            print(f"  ❌ Failed to convert {html_file}: {str(e)}")
    
    print(f"\n🎉 Conversion complete! {converted_count}/{len(html_files)} file(s) converted successfully.")
    return True

def convert_with_backup(directory_path, keep_original=True):
    """
    Convert HTML files to PHP while keeping backups
    
    Args:
        directory_path (str): Path to directory
        keep_original (bool): Keep original HTML files
    """
    if not os.path.exists(directory_path):
        print(f"❌ Directory '{directory_path}' does not exist!")
        return False
    
    # Create backup directory
    backup_dir = os.path.join(directory_path, 'html_backup')
    if not os.path.exists(backup_dir):
        os.makedirs(backup_dir)
    
    html_files = []
    for root, dirs, files in os.walk(directory_path):
        # Skip backup directory
        if backup_dir in root:
            continue
            
        for file in files:
            if file.lower().endswith('.html'):
                html_files.append(os.path.join(root, file))
    
    if not html_files:
        print("No HTML files found.")
        return True
    
    print(f"📁 Found {len(html_files)} HTML file(s)")
    
    converted = 0
    for html_file in html_files:
        try:
            # Backup original file
            relative_path = os.path.relpath(html_file, directory_path)
            backup_file = os.path.join(backup_dir, relative_path)
            
            # Create backup directory structure
            os.makedirs(os.path.dirname(backup_file), exist_ok=True)
            shutil.copy2(html_file, backup_file)
            
            # Read content
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Create PHP filename
            php_file = html_file[:-5] + '.php'
            
            # Check if it's a PHP include/require file and needs special handling
            lines = content.split('\n')
            new_lines = []
            
            # Add PHP opening tag if needed
            if '<?php' not in content:
                new_lines.append('<?php')
                new_lines.append('// File converted from HTML to PHP')
                new_lines.append('?>')
                new_lines.append('')
            
            new_lines.extend(lines)
            
            # Write PHP file
            with open(php_file, 'w', encoding='utf-8') as f:
                f.write('\n'.join(new_lines))
            
            # Remove HTML file if not keeping original
            if not keep_original:
                os.remove(html_file)
            
            print(f"  ✅ {os.path.basename(html_file)} → {os.path.basename(php_file)}")
            converted += 1
            
        except Exception as e:
            print(f"  ❌ Error with {html_file}: {str(e)}")
    
    print(f"\n📊 Summary:")
    print(f"  • Files converted: {converted}/{len(html_files)}")
    print(f"  • Backup location: {backup_dir}")
    if keep_original:
        print(f"  • Original HTML files kept")
    else:
        print(f"  • Original HTML files removed")
    
    return True

def batch_rename_only(directory_path):
    """
    Just rename .html to .php without modifying content
    """
    if not os.path.exists(directory_path):
        print(f"Directory '{directory_path}' does not exist!")
        return False
    
    html_files = []
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file.lower().endswith('.html'):
                html_files.append(os.path.join(root, file))
    
    if not html_files:
        print("No HTML files found.")
        return True
    
    print(f"Found {len(html_files)} HTML file(s) to rename:")
    
    renamed = 0
    for html_file in html_files:
        try:
            # Rename the file
            php_file = html_file[:-5] + '.php'
            os.rename(html_file, php_file)
            print(f"  ✅ Renamed: {os.path.basename(html_file)} → {os.path.basename(php_file)}")
            renamed += 1
        except Exception as e:
            print(f"  ❌ Failed to rename {html_file}: {str(e)}")
    
    print(f"\nRenamed {renamed}/{len(html_files)} file(s).")
    return True

def main():
    parser = argparse.ArgumentParser(description='Convert HTML files to PHP')
    parser.add_argument('directory', help='Directory path containing HTML files')
    parser.add_argument('--backup', '-b', action='store_true', help='Keep backup of original files')
    parser.add_argument('--keep', '-k', action='store_true', help='Keep original HTML files')
    parser.add_argument('--rename-only', '-r', action='store_true', help='Only rename files, don\'t modify content')
    
    args = parser.parse_args()
    
    print("=" * 50)
    print("HTML to PHP Converter")
    print("=" * 50)
    
    # Validate directory
    if not os.path.exists(args.directory):
        print(f"Error: Directory '{args.directory}' does not exist!")
        sys.exit(1)
    
    # Choose conversion method
    if args.rename_only:
        print("Mode: Rename only (no content modification)")
        success = batch_rename_only(args.directory)
    elif args.backup:
        print("Mode: Convert with backup")
        success = convert_with_backup(args.directory, args.keep)
    else:
        print("Mode: Standard conversion")
        success = convert_html_to_php(args.directory)
    
    if success:
        print("\n✅ Operation completed successfully!")
    else:
        print("\n❌ Operation failed!")
        sys.exit(1)

if __name__ == "__main__":
    # If no command line arguments, run interactively
    if len(sys.argv) == 1:
        print("HTML to PHP File Converter")
        print("-" * 40)
        
        while True:
            dir_path = input("\nEnter directory path (or 'quit' to exit): ").strip()
            
            if dir_path.lower() in ['quit', 'exit', 'q']:
                print("Goodbye!")
                break
            
            if not dir_path:
                print("Please enter a directory path.")
                continue
            
            # Validate path
            if not os.path.exists(dir_path):
                print(f"Error: '{dir_path}' does not exist!")
                continue
            
            print("\nChoose conversion method:")
            print("1. Standard conversion (modify content, remove HTML)")
            print("2. Convert with backup")
            print("3. Rename only (no content modification)")
            print("4. Cancel")
            
            choice = input("Enter choice (1-4): ").strip()
            
            if choice == '1':
                convert_html_to_php(dir_path)
            elif choice == '2':
                keep = input("Keep original HTML files? (y/n): ").lower() == 'y'
                convert_with_backup(dir_path, keep)
            elif choice == '3':
                batch_rename_only(dir_path)
            elif choice == '4':
                print("Operation cancelled.")
            else:
                print("Invalid choice!")
            
            another = input("\nConvert another directory? (y/n): ").lower()
            if another != 'y':
                print("Goodbye!")
                break
    else:
        main()