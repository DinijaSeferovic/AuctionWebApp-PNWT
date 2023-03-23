package ba.tim10.items.repositories;

import ba.tim10.items.domains.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CategoryRepository extends CrudRepository<Category, UUID> {

    List<Category> findByName(String name);

    Optional<Category> findById(UUID id);
}
