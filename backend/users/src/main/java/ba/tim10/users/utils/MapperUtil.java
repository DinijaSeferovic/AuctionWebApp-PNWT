package ba.tim10.users.utils;

import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public class MapperUtil {

    private final ModelMapper modelMapper = new ModelMapper();

    public MapperUtil() {
    }

    /**
     * The method is used for converting entity objects to dto objects
     * @param d entity object
     * @param dtoClass class of dto object
     * @return mapped data between differently structured objects
     * @param <T> entity class
     * @param <D> dto class
     */
    public <T, D> T convertEntityToDto(D d, Class<T> dtoClass) {
        return modelMapper.map(d, dtoClass);
    }

    /**
     * The method is used for converting list of entity objects to dto object list
     * @param entityList list of entity objects
     * @param dtoClass class of dto object
     * @return mapped data between two lists
     * @param <T> entity class
     * @param <D> dto class
     */
    public <T, D> List<T> convertListEntityToDto(List<D> entityList, Class<T> dtoClass) {
        return entityList.stream().map(o -> this.<T, D>convertEntityToDto(o, dtoClass)).collect(Collectors.toList());
    }
}
