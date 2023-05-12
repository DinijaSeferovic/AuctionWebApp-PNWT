package ba.tim10.users.controllers;

import ba.tim10.users.domains.SellerReview;
import ba.tim10.users.services.SellerReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;
import java.util.UUID;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user/seller-reviews")
public class SellerReviewController {

    private final SellerReviewService sellerReviewService;

    public SellerReviewController(SellerReviewService sellerReviewService) {
        this.sellerReviewService = sellerReviewService;
    }

    @GetMapping
    public List<SellerReview> getReviews() {
        return sellerReviewService.findAll();
    }

    @GetMapping("/{id}")
    public SellerReview getReviewById(@PathVariable UUID id) {
        return sellerReviewService.findById(id);
    }

    @PostMapping
    public ResponseEntity<SellerReview> saveOrUpdate(@RequestBody SellerReview newReview) throws ServerException {

        SellerReview review = sellerReviewService.saveOrUpdate(newReview);
        if (review == null) {
            throw new ServerException("Server exception");
        } else {
            return new ResponseEntity<>(review, HttpStatus.CREATED);
        }
    }
}
