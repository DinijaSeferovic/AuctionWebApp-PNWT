package ba.tim10.items.services;

import ba.tim10.items.domains.Category;
import ba.tim10.items.dto.CategoryDTO;
import ba.tim10.items.repositories.CategoryRepository;
import ba.tim10.items.utils.MapperUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    private final MapperUtil mapper = new MapperUtil();

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryDTO> getMainCategories() {
        return mapper.convertListEntityToDto(categoryRepository.findTop9ByOrderByIdAsc(), CategoryDTO.class);
    }

    public List<CategoryDTO> getCategories() {
        return mapper.convertListEntityToDto(categoryRepository.findAll(), CategoryDTO.class);
    }
}
