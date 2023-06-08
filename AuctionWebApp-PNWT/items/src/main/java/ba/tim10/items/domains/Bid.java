package ba.tim10.items.domains;

import jakarta.persistence.*;
import jdk.jfr.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.awt.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Bid {

    @Id
    @Column(nullable = false)
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column
    private Double amount;

    @Column
    private LocalDateTime bidDateTime;

    public Bid(Product product, Double amount, LocalDateTime bidDateTime) {
        this.product = product;
        this.amount = amount;
        this.bidDateTime = bidDateTime;
    }
}
