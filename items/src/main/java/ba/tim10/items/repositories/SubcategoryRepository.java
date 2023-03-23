package ba.tim10.items.repositories;

import ba.tim10.items.domains.Subcategory;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface SubcategoryRepository extends CrudRepository<Subcategory, UUID> {

    List<Subcategory> findByName(String name);

    Optional<Subcategory> findById(UUID id);
}
