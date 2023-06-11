package ba.tim10.items.controllers;

import ba.tim10.items.domains.Subcategory;
import ba.tim10.items.dto.SubcategoryDTO;
import ba.tim10.items.repositories.SubcategoryRepository;
import ba.tim10.items.services.SubcategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/items")
public class SubcategoryController {

    private final SubcategoryService subcategoryService;

    public SubcategoryController(SubcategoryService subcategoryService) {
        this.subcategoryService = subcategoryService;
    }

    /**
     * Calls service method to get subcategories that have the provided category id
     *
     * @param id id of the category
     * @return list of {@link SubcategoryDTO}
     */
    @GetMapping("/subcategories/categories/{id}")
    public List<SubcategoryDTO> getSubcategoriesByCategoryId(@PathVariable UUID id) {
        return subcategoryService.getSubcategoriesByCategoryId(id);
    }
}