package ba.tim10.items.repositories;

import ba.tim10.items.domains.Item;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ItemRepository extends CrudRepository<Item, UUID> {

    List<Item> findByName(String name);

    Optional<Item> findById(UUID id);
}
