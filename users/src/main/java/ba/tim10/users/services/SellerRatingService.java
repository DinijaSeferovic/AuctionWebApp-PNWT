package ba.tim10.users.services;

import ba.tim10.users.domains.SellerRating;
import ba.tim10.users.repositories.SellerRatingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SellerRatingService {

    private final SellerRatingRepository sellerRatingRepository;

    public SellerRatingService(SellerRatingRepository sellerRatingRepository) {
        this.sellerRatingRepository = sellerRatingRepository;
    }

    public SellerRating findById(UUID id) {
        return sellerRatingRepository.findById(id);
    }

    public List<SellerRating> findAll() {
        return sellerRatingRepository.findAll();
    }

    public SellerRating saveOrUpdate(SellerRating sellerRating) {
        return sellerRatingRepository.saveAndFlush(sellerRating);
    }
}

