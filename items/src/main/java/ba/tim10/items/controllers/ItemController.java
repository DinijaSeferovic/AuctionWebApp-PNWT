package ba.tim10.items.controllers;

import ba.tim10.items.domains.Item;
import ba.tim10.items.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@ResponseBody
@RequestMapping("/item/item")
public class ItemController {

    @Autowired
    private ItemRepository repository;

    @GetMapping("/{id}")
    public Optional<Item> findById(@PathVariable UUID id) {
        return repository.findById(id);
    }

}
