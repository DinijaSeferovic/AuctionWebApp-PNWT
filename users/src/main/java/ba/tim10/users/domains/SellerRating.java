package ba.tim10.users.domains;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SellerRating {

    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "buyer_id")
    private SellerRating buyer_id;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private SellerRating seller_id;

    @Column
    private Double rating;

}
