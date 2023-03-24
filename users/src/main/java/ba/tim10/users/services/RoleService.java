package ba.tim10.users.services;

import ba.tim10.users.domains.Role;
import ba.tim10.users.repositories.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class RoleService {

    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public List<Role> findAll() {
        return roleRepository.findAll();
    }

    public Role findById(UUID id) {
        return roleRepository.findById(id);
    }

    public Role findByName(String name) {
        return roleRepository.findByName(name);
    }

    public Role saveOrUpdate(Role role) {
        return roleRepository.saveAndFlush(role);
    }

}
