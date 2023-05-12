package ba.tim10.items.controllers;

import ba.tim10.items.domains.Bid;
import ba.tim10.items.repositories.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@ResponseBody
@RequestMapping("/item/bid")
public class BidController {

    @Autowired
    private BidRepository repository;

    @GetMapping("/{id}")
    public Optional<Bid> findById(@PathVariable UUID id) {
        return repository.findById(id);
    }
}
