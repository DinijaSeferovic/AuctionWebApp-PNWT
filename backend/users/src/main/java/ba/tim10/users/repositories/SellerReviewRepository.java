package ba.tim10.users.repositories;

import ba.tim10.users.domains.SellerReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SellerReviewRepository extends JpaRepository<SellerReview, Integer> {

    SellerReview findById(UUID id);
}