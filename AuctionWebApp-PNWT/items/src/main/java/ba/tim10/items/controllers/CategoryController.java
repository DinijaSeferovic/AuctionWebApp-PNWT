package ba.tim10.items.controllers;


import ba.tim10.items.dto.CategoryDTO;
import ba.tim10.items.services.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ResponseBody
@CrossOrigin(origins = "*")
@RequestMapping("/item/categories")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    /**
     * Calls service method to get main categories from database
     *
     * @return list of {@link CategoryDTO}
     */
    @GetMapping("/main")
    public List<CategoryDTO> getMainCategories() {
        return categoryService.getMainCategories();
    }

    /**
     * Calls service method to get all categories from database
     *
     * @return list of {@link CategoryDTO}
     */
    @GetMapping
    public List<CategoryDTO> getCategories() {
        return categoryService.getCategories();
    }
}
