package ba.tim10.items.domains;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jdk.jfr.Category;
import org.hibernate.annotations.UuidGenerator;

import java.awt.*;
import java.util.Date;
import java.util.UUID;

@Entity
public class Bid {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @UuidGenerator
    private UUID id;
    private Double amount;

    protected Bid() {}

    protected Bid(UUID id, Double amount){
        this.amount = amount;
        this.id = id;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
