package ba.tim10.users.controllers;

import ba.tim10.users.domains.Role;
import ba.tim10.users.services.RoleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/roles")
public class RoleController {

    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    public List<Role> getRoles() {
        return roleService.findAll();
    }

    public Role getRoleById(UUID id) {
        return roleService.findById(id);
    }

    public Role getRoleByName(String name) {
        return roleService.findByName(name);
    }

    @PostMapping
    public ResponseEntity<Role> saveOrUpdate(@RequestBody Role newRole) throws ServerException {

        Role role = roleService.saveOrUpdate(newRole);
        if (role == null) {
            throw new ServerException("Server exception");
        } else {
            return new ResponseEntity<>(role, HttpStatus.CREATED);
        }
    }
}
