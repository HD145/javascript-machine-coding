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


