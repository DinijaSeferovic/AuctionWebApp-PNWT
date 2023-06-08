package ba.tim10.items.repositories;

import ba.tim10.items.domains.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    Page<Product> findByEndDateAfter(LocalDateTime date, Pageable pageable);

    Page<Product> findByPaid(Boolean paid, Pageable pageable);

    long countByPaid(Boolean paid);

    long countByEndDateAfter(LocalDateTime date);

    Product findTopByEndDateAfterOrderByEndDateAsc(LocalDateTime date);

    Product findById(UUID id);

    Page<Product> findByEndDateAfterAndCategoryId(LocalDateTime date, UUID id, Pageable pageable);

    long countBySubcategoryIdAndEndDateAfter(UUID id, LocalDateTime date);

    Page<Product> findByEndDateAfterAndNameContainingIgnoreCase(LocalDateTime date, String name, Pageable pageable);

    Page<Product> findByEndDateAfterAndCategoryIdAndNameContainingIgnoreCase(LocalDateTime date, UUID id, String name, Pageable pageable);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE product SET paid=:paid WHERE id=:id", nativeQuery = true)
    void updatePaidStatus(Boolean paid, UUID id);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE product SET buyer_id=:userId WHERE id=:id", nativeQuery = true)
    void updateProductBuyer(UUID userId, UUID id);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE product SET end_date=:newEndDate WHERE id=:productId", nativeQuery = true)
    void updateEndDate(LocalDateTime newEndDate, UUID productId);
}