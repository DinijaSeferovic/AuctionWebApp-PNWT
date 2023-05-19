package ba.tim10.payments.repositories;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import ba.tim10.payments.domains.Transaction;
import org.springframework.data.repository.CrudRepository;
public interface TransactionRepository extends CrudRepository<Transaction, UUID> {
    List<Transaction> findByStripeInfo(String stripeInfo);

    Optional<Transaction> findById(UUID id);
}


