package ba.tim10.users.domains;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SellerReview {

    @Id
    @Column(nullable = false)
    @GeneratedValue
    private UUID id;

    @OneToOne
    @JoinColumn(name = "buyer_id")
    private SellerRating buyer_id;

    @OneToOne
    @JoinColumn(name = "seller_id")
    private SellerRating seller_id;

    @Column
    private String review;
}
