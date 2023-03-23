package ba.tim10.items.repositories;

import ba.tim10.items.domains.Bid;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface BidRepository extends CrudRepository<Bid, UUID> {
    List<Bid> findByAmount (Double amount);

    Optional<Bid> findById(UUID id);
}
