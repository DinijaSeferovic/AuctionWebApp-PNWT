package ba.tim10.items.controllers;

import ba.tim10.items.domains.Subcategory;
import ba.tim10.items.repositories.SubcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@ResponseBody
@RequestMapping("/item/subcategory")
public class SubcategoryController {

    @Autowired
    private SubcategoryRepository repository;

    @GetMapping("/{id}")
    public Optional<Subcategory> findById(@PathVariable UUID id) {
        return repository.findById(id);
    }
}
