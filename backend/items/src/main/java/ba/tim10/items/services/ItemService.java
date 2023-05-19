package ba.tim10.items.services;

import ba.tim10.items.domains.Item;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ItemService {

    List<Item> findByName(String name){
        return null;
    }

    Optional<Item> findById(UUID id){
        return null;
    }
}
