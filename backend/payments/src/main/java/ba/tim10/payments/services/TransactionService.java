package ba.tim10.payments.services;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import ba.tim10.payments.domains.Transaction;
import ba.tim10.payments.repositories.TransactionRepository;
import com.fasterxml.jackson.databind.ser.std.UUIDSerializer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
    /*    List<Transaction> findByStripeInfo(String stripeInfo);

    Optional<Transaction> findById(UUID id);*/

    public List<Transaction> findByStripeInfo(String stripeInfo){
        return null;
    }

    public Optional<Transaction> findById(UUID id){
        return null;
    }
}
