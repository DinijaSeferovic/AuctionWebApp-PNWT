package ba.tim10.items.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductRowDTO {
    private UUID id;

    private String name;

    private String timeLeft;

    private long bids;

    private Double price;

    private Double highestBid;

    private Double growthRate;

    private String imagePath;
}