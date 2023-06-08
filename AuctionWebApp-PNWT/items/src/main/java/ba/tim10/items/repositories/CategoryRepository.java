package ba.tim10.items.repositories;

import ba.tim10.items.domains.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    List<Category> findTop9ByOrderByIdAsc();

    List<Category> findAll();
}