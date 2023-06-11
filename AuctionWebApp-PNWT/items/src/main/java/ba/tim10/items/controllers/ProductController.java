package ba.tim10.items.controllers;

import ba.tim10.items.dto.ProductDTO;
import ba.tim10.items.dto.ProductRowDTO;
import ba.tim10.items.services.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@ResponseBody
@RequestMapping("/api/items")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /**
     * Calls service method that gets all products from database
     *
     * @return list of {@link ProductDTO}
     */
    @GetMapping
    public List<ProductDTO> getProducts() {
        return productService.getProducts();
    }

    /**
     * Calls service method that gets the product with the earliest end date
     *
     * @return found product as {@link ProductDTO}
     */
    @GetMapping("/highlight")
    public ProductDTO getHighlightProduct() {
        return productService.getHighlightProduct();
    }

    /**
     * Calls service method that gets the product with provided id
     *
     * @param id id of the product
     * @return found product as {@link ProductDTO}
     */
    @GetMapping("/{id}")
    public ProductDTO getProduct(@PathVariable UUID id) {
        return productService.getProduct(id);
    }

    /**
     * Calls service method that gets active products in ascending order by end date
     *
     * @param page page number
     * @param limit number of products per page
     * @return list of {@link ProductDTO}
     */
    @GetMapping("/last-chance")
    public List<ProductDTO> getProductsLastChance(@RequestParam int page, @RequestParam int limit) {
        return productService.getProductsLastChance(page, limit);
    }

    /**
     * Calls service method that gets active products in descending order by start date
     *
     * @param page page number
     * @param limit number of products per page
     * @return list of {@link ProductDTO}
     */
    @GetMapping("/new-arrivals")
    public List<ProductDTO> getProductsNewArrivals(@RequestParam int page, @RequestParam int limit) {
        return productService.getProductsNewArrivals(page, limit);
    }

    /**
     * Calls service method that gets list of {@link ProductRowDTO} based on status
     *
     * @param page page number
     * @param limit number of products per page
     * @param status requested status of the products
     * @return list of {@link ProductRowDTO}
     */
    @GetMapping("/rows/{status}")
    public List<ProductRowDTO> getProductRows(@RequestParam int page, @RequestParam int limit, @PathVariable String status) {
        return productService.getProductRows(page, limit, status);
    }

    /**
     * Calls service method that gets the count of products based on status
     *
     * @param status requested status of the products
     * @return number of products
     */
    @GetMapping("/{status}/count")
    public long getProducts(@PathVariable String status) {
        return productService.getProductsCount(status);
    }

    /**
     * Calls service method that gets products by provided category id
     *
     * @param id category id
     * @param page page number
     * @param limit number of products per page
     * @return list of {@link ProductDTO}
     */
    @GetMapping("/categories/{id}")
    public List<ProductDTO> getProductsByCategory(@PathVariable UUID id, @RequestParam int page, @RequestParam int limit) {
        return productService.getProductsByCategory(id, page, limit);
    }

    /**
     * Calls service method that gets the count of the active products that have the provided subcategory id
     *
     * @param id subcategory id
     * @return count
     */
    @GetMapping("/subcategories/{id}/count")
    public long getProductCountBySubcategory(@PathVariable UUID id) {
        return productService.getProductCountBySubcategory(id);
    }

    /**
     * Filters products based on provided parameters
     *
     * @param name name of the product
     * @param categoryId category id of the product
     * @param page page number
     * @param limit number of products per page
     * @return list {@link ProductDTO}
     */
    @GetMapping("/search")
    public List<ProductDTO> getFilteredProducts(@RequestParam(value = "name", required = false) String name, @RequestParam(value = "categoryId", required = false) UUID categoryId, @RequestParam int page, @RequestParam int limit) {
        if (name!=null && categoryId!=null) {
            return productService.getProductsByNameAndCategory(name, categoryId, page, limit);
        }
        else if (name!=null) {
            return productService.getProductsByName(name, page, limit);
        }
        else if (categoryId!=null) {
            return productService.getProductsByCategory(categoryId, page, limit);
        }
        else {
            return productService.getProductsNewArrivals(page, limit);
        }
    }

    /**
     * Calls service method to update the paid status od the product
     *
     * @param paid status value
     * @param productId products which status needs to be changed
     * @return {@link ResponseEntity}
     */
    @PutMapping("/{productId}/paid-status")
    public ResponseEntity<?> updatePaidStatus(@RequestBody Boolean paid, @PathVariable UUID productId) {
        productService.updatePaidStatus(paid, productId);
        return ResponseEntity.ok("Successful update");
    }

    /**
     * Calls service method to update product buyer
     *
     * @param user id of the buyer
     * @param productId products which buyer needs to be changed
     * @return {@link ResponseEntity}
     */
    @PutMapping("/{productId}/update-buyer")
    public ResponseEntity<?> updateProductBuyer(@RequestParam UUID user, @PathVariable UUID productId) {
        productService.updateBuyer(user, productId);
        return ResponseEntity.ok("Successful update");
    }

    /**
     * Calls service method to update product end date
     *
     * @param year year of the new date
     * @param month month of the new date
     * @param day days of the new date
     * @param hour hours of the new date and time
     * @param minute minutes of the new date and time
     * @param productId product which end date needs to be changed
     * @return {@link ResponseEntity}
     */
    @PutMapping("/{productId}/end-date")
    public ResponseEntity<?> updateEndDate(@RequestParam int year, @RequestParam int month, @RequestParam int day, @RequestParam int hour, @RequestParam int minute, @PathVariable UUID productId) {
        LocalDateTime newEndDate = LocalDateTime.of(year, month, day, hour, minute);
        productService.updateEndDate(newEndDate, productId);
        return ResponseEntity.ok("Successful end date update");
    }

}