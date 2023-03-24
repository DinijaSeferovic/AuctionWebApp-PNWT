package ba.tim10.users.repositories;

import ba.tim10.users.domains.SellerRating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SellerRatingRepository extends JpaRepository<SellerRating, Integer> {

    SellerRating findById(UUID id);
}
