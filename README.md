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