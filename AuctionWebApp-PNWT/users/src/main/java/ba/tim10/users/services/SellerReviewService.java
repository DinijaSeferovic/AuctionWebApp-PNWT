package ba.tim10.users.services;

import ba.tim10.users.domains.SellerReview;
import ba.tim10.users.repositories.SellerReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SellerReviewService {
    private final SellerReviewRepository sellerReviewRepository;

    public SellerReviewService(SellerReviewRepository sellerReviewRepository) {
        this.sellerReviewRepository = sellerReviewRepository;
    }

    public SellerReview findById(UUID id) {
        return sellerReviewRepository.findById(id);
    }

    public List<SellerReview> findAll() {
        return sellerReviewRepository.findAll();
    }

    public SellerReview saveOrUpdate(SellerReview sellerReview) {
        return sellerReviewRepository.saveAndFlush(sellerReview);
    }
}
