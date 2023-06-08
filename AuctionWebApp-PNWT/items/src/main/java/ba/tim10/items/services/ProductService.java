package ba.tim10.items.services;

import ba.tim10.items.domains.Product;
import ba.tim10.items.dto.ProductDTO;
import ba.tim10.items.dto.ProductRowDTO;
import ba.tim10.items.repositories.BidRepository;
import ba.tim10.items.repositories.ImageRepository;
import ba.tim10.items.repositories.ProductRepository;
import ba.tim10.items.utils.MapperUtil;
import ba.tim10.items.utils.TimeDifferenceUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final BidRepository bidRepository;
    private final ImageRepository imageRepository;

    private final MapperUtil mapper = new MapperUtil();

    public ProductService(ProductRepository productRepository, BidRepository bidRepository, ImageRepository imageRepository) {
        this.productRepository = productRepository;
        this.bidRepository = bidRepository;
        this.imageRepository = imageRepository;
    }

    /**
     * Gets the product with the earliest end date
     *
     * @return found {@link ProductDTO}
     */
    public ProductDTO getHighlightProduct() {
        return mapper.convertEntityToDto(productRepository.findTopByEndDateAfterOrderByEndDateAsc(LocalDateTime.now()), ProductDTO.class);
    }

    /**
     * Gets the product that has the provided id
     *
     * @param id id of the requested product
     * @return found {@link ProductDTO}
     */
    public ProductDTO getProduct(UUID id) {
        return mapper.convertEntityToDto(productRepository.findById(id), ProductDTO.class);
    }

    /**
     * Gets the product that has the provided id
     *
     * @param id id of the requested product
     * @return found {@link Product}
     */
    public Product getProductById(UUID id) {
        return productRepository.findById(id);
    }

    /**
     * Gets active products in ascending order by end date
     *
     * @param page page number
     * @param limit number of products per page
     * @return list of {@link ProductDTO}
     */
    public List<ProductDTO> getProductsLastChance(int page, int limit) {
        Pageable paging = PageRequest.of(page, limit, Sort.by(Sort.Order.asc("endDate")));
        Page<Product> pagedResult = productRepository.findByEndDateAfter(LocalDateTime.now(), paging);
        return mapper.convertListEntityToDto(pagedResult.toList(), ProductDTO.class);
    }

    /**
     * Gets active products in descending order by start date
     *
     * @param page page number
     * @param limit number of products per page
     * @return list of {@link ProductDTO}
     */
    public List<ProductDTO> getProductsNewArrivals(int page, int limit) {
        Pageable paging = PageRequest.of(page, limit, Sort.by(Sort.Order.desc("startDate")));
        Page<Product> pagedResult = productRepository.findByEndDateAfter(LocalDateTime.now(), paging);
        return mapper.convertListEntityToDto(pagedResult.toList(), ProductDTO.class);
    }

    /**
     * Gets active products that have the provided category id
     *
     * @param id id of the category
     * @param page page number
     * @param limit number of products per page
     * @return list of {@link ProductDTO}
     */
    public List<ProductDTO> getProductsByCategory(UUID id, int page, int limit) {
        Pageable paging = PageRequest.of(page, limit);
        Page<Product> pagedResult = productRepository.findByEndDateAfterAndCategoryId(LocalDateTime.now(), id, paging);
        return mapper.convertListEntityToDto(pagedResult.toList(), ProductDTO.class);
    }

    /**
     * Gets the count of the active products that have the provided subcategory id
     *
     * @param id id of the subcategory
     * @return count
     */
    public long getProductCountBySubcategory(UUID id) {
        return productRepository.countBySubcategoryIdAndEndDateAfter(id, LocalDateTime.now());
    }

    /**
     * Gets all products from database
     *
     * @return list of {@link ProductDTO}
     */
    public List<ProductDTO> getProducts() {
        return mapper.convertListEntityToDto(productRepository.findAll(), ProductDTO.class);
    }

    /**
     * Gets count of the products with requested status
     *
     * @param status requested status
     * @return number of products
     */
    public long getProductsCount(String status) {
        long count = 0;
        if (status.equals("active")) {
            count = productRepository.countByEndDateAfter(LocalDateTime.now());
        } else if (status.equals("sold")) {
            count = productRepository.countByPaid(true);
        }
        return count;
    }

    /**
     * Gets active products that contain the provided string in the name
     *
     * @param name name for searching
     * @param page page number
     * @param limit number of products per page
     * @return list of {@link ProductDTO}
     */
    public List<ProductDTO> getProductsByName(String name, int page, int limit) {
        Pageable paging = PageRequest.of(page, limit);
        Page<Product> pagedResult = productRepository.findByEndDateAfterAndNameContainingIgnoreCase(LocalDateTime.now(), name, paging);
        return mapper.convertListEntityToDto(pagedResult.toList(), ProductDTO.class);
    }

    /**
     * Gets active products that have the provided name and category id
     *
     * @param name name for searching
     * @param categoryId category id of products
     * @param page page number
     * @param limit number of products per page
     * @return list of {@link ProductDTO}
     */
    public List<ProductDTO> getProductsByNameAndCategory(String name, UUID categoryId, int page, int limit) {
        Pageable paging = PageRequest.of(page, limit);
        Page<Product> pagedResult = productRepository.findByEndDateAfterAndCategoryIdAndNameContainingIgnoreCase(LocalDateTime.now(), categoryId, name, paging);
        return mapper.convertListEntityToDto(pagedResult.toList(), ProductDTO.class);
    }

    /**
     * Updates the paid column in product table
     *
     * @param paid paid status
     * @param productID product which status is updated
     */
    public void updatePaidStatus(Boolean paid, UUID productID) {
        productRepository.updatePaidStatus(paid, productID);
    }

    /**
     * Updates the buyerId column in product table
     *
     * @param userId buyer id to be updated
     * @param productID product which buyer is updated
     */
    public void updateBuyer(UUID userId, UUID productID) {
        productRepository.updateProductBuyer(userId, productID);
    }

    /**
     * Gets list of {@link ProductRowDTO} info for table rows based on products with requested status
     *
     * @param page page number
     * @param limit number of products per page
     * @param status status of the products
     * @return list of {@link ProductRowDTO}
     */
    public List<ProductRowDTO> getProductRows(int page, int limit, String status) {
        Pageable paging = PageRequest.of(page, limit);
        Page<Product> products = null;

        if (status.equals("active")) {
            products = productRepository.findByEndDateAfter(LocalDateTime.now(), paging);
        } else if (status.equals("sold")) {
            products = productRepository.findByPaid(true, paging);
        }
        TimeDifferenceUtil timeDifference = new TimeDifferenceUtil();
        List<ProductRowDTO> productsRows = new ArrayList<>();

        for (Product product : products.getContent()) {
            ProductRowDTO row = new ProductRowDTO();
            row.setId(product.getId());
            row.setName(product.getName());
            row.setTimeLeft(timeDifference.getTimeDifference(product.getEndDate()));
            row.setBids(bidRepository.countByProductId(product.getId()));
            row.setPrice(product.getStartPrice());
            if (bidRepository.findFirstByProductIdOrderByAmountDesc(product.getId()) != null) {
                row.setHighestBid(bidRepository.findFirstByProductIdOrderByAmountDesc(product.getId()).getAmount());
            } else {
                row.setHighestBid(product.getStartPrice());
            }
            row.setGrowthRate(calculateGrowthRate(row.getHighestBid(), row.getPrice(), 2));
            row.setImagePath(imageRepository.findByProductId(product.getId()).get(0).getImagePath());
            productsRows.add(row);
        }

        return productsRows;
    }

    private Double calculateGrowthRate(Double highestValue, Double startValue, int scale) {
        Double growthRate = new BigDecimal(((highestValue-startValue)/startValue)*100).setScale(scale, RoundingMode.HALF_UP).doubleValue();
        return growthRate;
    }

    public void updateEndDate(LocalDateTime newEndDate, UUID productId) {
        productRepository.updateEndDate(newEndDate, productId);
    }
}
