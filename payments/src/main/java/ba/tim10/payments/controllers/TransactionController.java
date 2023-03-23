package ba.tim10.payments.controllers;

import ba.tim10.payments.domains.Transaction;
import ba.tim10.payments.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@ResponseBody
@RequestMapping("/api/transaction")
public class TransactionController {

    @Autowired
    private TransactionRepository repository;

    @GetMapping("/{id}")
    public Optional<Transaction> getTransactionById(@PathVariable UUID id) {
        return repository.findById(id);
    }



}