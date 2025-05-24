# Tab Management Application

1. The component should accept a list of tabs as props[Profile, Interest, Setting].
2. Each tab should have a title and content.
3. The first tab should be selected by default.
4. Clicking on a tab should update the displayed content.
5. The component should be reusable and scalable.
6. Submit button should be in the last page only and data should persist along all tabs. 
7. Display proper and valid validations accordingly on clicking submit button.


# Pagination Application

1. Fetch products from this API endpoint: https://dummyjson.com/products?limit=200 or dummy json array.
2. Display 10/12/30 products per page.
3. Include pagination controls
4. A Previous button with id="previous" to navigate to the previous page. It should be disabled on the first page.
5. A Next button with id="next" to navigate to the next page. It should be disabled on the last page.
6. Buttons for each page number (1-20) (highlight the active one)
7. Clicking "Next" should go to the next page.
8. Clicking "Previous" should go to the previous page.
9. Clicking a page number (1-20) should directly load that page.
10. Show "No products found" mesage if the product list is empty.


# Autocomplete Search Bar Application

1. The search input should dynamically fetch and display results based on the user’s typed keyword.
2. API calls must be debounced to avoid sending a request for every keystroke and reduce server load.
3. Previously searched keywords and their results should be cached locally to avoid redundant API calls. 

# Progress Bar Application
1. The search input should dynamically fetch and display results based on the user’s typed keyword.
1. Display a single progress bar
2. Show numeric progress from 0% to 100%
3. Include '+10%' and '-10%' buttons to adjust progress
4. Prevent progress from going below 0% or above 100%
5. Change progress bar color based on value
6. Color thresholds: Red if less than 40%, Orange if between 40%–79%, Green if 80% or more
7. Animate progress bar when clicking '+10%' or '-10%'


# OTP Generator Application
1. Four separate input fields for entering a k-digit OTP.
2. Auto-focus navigation moves the cursor to the next input after a digit is entered.
3. Backspace support: clears the current input and focuses the previous field.
4. Paste support: handles full OTP paste, extracting and filling only numeric characters.

# Nested Checkbox Application
1. Parent → Child Behavior: When a parent checkbox is checked or unchecked, all its children and nested children must adopt the same state.
2. Child → Parent Behavior: When all children of a parent are checked, the parent should automatically become checked.
3. If any child is unchecked, the parent should become unchecked as well.
4. Recursive Tree Structure: The checkbox system must support multiple levels of nesting, forming a recursive tree hierarchy.


# Todo Application

1. The component should maintain a list of todos in its state.
2. A todo has: id, text, and completed (boolean).
3. An input box with placeholder "Enter todo" to type a new todo.
4. A button labelled "Add" to add a todo.
5. Each todo should display its text and a checkbox to toggle completion.
6. Each todo should have a delete button labelled "Delete" to delete a todo.
7. Completed todos should appear with a strikethrough style.


# Input Chips Application

1. Input Field: Users can type text into an input field.
2. Add Chips: When the user presses the "Enter" key, the typed text will be added as a new chip (tag). Empty or whitespace-only chips should not be added.
3. Remove Chips: Users can delete a chip by clicking the "X" button next to it.
4. Horizontal Display: The chips should be displayed in a horizontal list.
5. Persistence: The list of chips should be maintained even when the component re-renders.

# Accordian Application

1. Display a list of accordion items, each with a title and content.
2. Clicking on a title expands its content and collapses any previously opened item.
3. If an already open item is clicked, it should collapse.
4. The component should accept an array of items as props. Each item contains title and content.
5. The component should handle edge cases such as an empty list or invalid input by displaying a message "No items available".

# File Explorer Application

1. Recursive Rendering: Folders can contain nested folders/files to any depth, handled with recursion.
2. Expand/Collapse UI: Each folder has toggle icons (using react-icons) to show/hide its contents.
3. Add Items: Users can add a file or folder inside any existing folder dynamically.
4. Remove Items: Files or folders (and their children) can be removed instantly.
5. State Management: The file tree is managed using React useState, and state updates propagate through the recursive structure.
6. Minimal Styling: Clean, readable layout using inline styles and icons for better UX.
7. Modal Design: An input field where users can type the name of a new file or folder, An Add button to submit the name, A Cancel button to close the modal without making any changes.