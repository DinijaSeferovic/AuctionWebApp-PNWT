package ba.tim10.items.services;

import ba.tim10.items.dto.SubcategoryDTO;
import ba.tim10.items.repositories.SubcategoryRepository;
import ba.tim10.items.utils.MapperUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SubcategoryService {

    private final SubcategoryRepository subcategoryRepository;

    private final MapperUtil mapper = new MapperUtil();

    public SubcategoryService(SubcategoryRepository subcategoryRepository) {
        this.subcategoryRepository = subcategoryRepository;
    }

    /**
     * Gets all subcategories that have the provided category id
     *
     * @param categoryId id of the category
     * @return list of {@link SubcategoryDTO}
     */
    public List<SubcategoryDTO> getSubcategoriesByCategoryId(UUID categoryId) {
        return mapper.convertListEntityToDto(subcategoryRepository.findByCategoryId(categoryId), SubcategoryDTO.class);
    }
}