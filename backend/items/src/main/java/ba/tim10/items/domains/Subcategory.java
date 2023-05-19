package ba.tim10.items.domains;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.hibernate.annotations.UuidGenerator;


import java.util.UUID;

@Entity
public class Subcategory {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @UuidGenerator
    private UUID id;
    private String name;

    protected Subcategory() {}

    protected Subcategory(UUID id, String name){
        this.id = id;
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
