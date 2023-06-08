package ba.tim10.items.repositories;

import ba.tim10.items.domains.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface BidRepository extends JpaRepository<Bid, UUID> {

    long countByProductId(UUID productId);

    Bid findFirstByProductIdOrderByAmountDesc(UUID productId);
}
