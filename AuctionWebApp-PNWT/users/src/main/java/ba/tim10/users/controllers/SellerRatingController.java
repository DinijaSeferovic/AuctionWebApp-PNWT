package ba.tim10.users.controllers;

import ba.tim10.users.domains.SellerRating;
import ba.tim10.users.services.SellerRatingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user/seller-ratings")
public class SellerRatingController {

    private final SellerRatingService sellerRatingService;

    public SellerRatingController(SellerRatingService sellerRatingService) {
        this.sellerRatingService = sellerRatingService;
    }

    @GetMapping
    public List<SellerRating> getRatings() {
        return sellerRatingService.findAll();
    }

    @GetMapping("/{id}")
    public SellerRating getRatingById(@PathVariable UUID id) {
        return sellerRatingService.findById(id);
    }

    @PostMapping
    public ResponseEntity<SellerRating> saveOrUpdate(@RequestBody SellerRating newRating) throws ServerException {

        SellerRating rating = sellerRatingService.saveOrUpdate(newRating);
        if (rating == null) {
            throw new ServerException("Server exception");
        } else {
            return new ResponseEntity<>(rating, HttpStatus.CREATED);
        }
    }
}