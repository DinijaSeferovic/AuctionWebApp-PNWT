package ba.tim10.items.controllers;

import ba.tim10.items.domains.Category;
import ba.tim10.items.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@ResponseBody
@RequestMapping("/item/category")
public class CategoryController {

    @Autowired
    private CategoryRepository repository;

    @GetMapping("/{id}")
    public Optional<Category> findById(@PathVariable UUID id) {
        return repository.findById(id);
    }
}
