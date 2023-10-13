package com.meeting.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.meeting.Modal.MobileRecharge;
import com.meeting.Service.MobileRechargeService;

@RestController
@RequestMapping("/mobile-recharges")
public class MobileRechargeController {

    private final MobileRechargeService mobileRechargeService;

    @Autowired
    public MobileRechargeController(MobileRechargeService mobileRechargeService) {
        this.mobileRechargeService = mobileRechargeService;
    }

    @PostMapping("/post")
    public MobileRecharge createMobileRecharge(@RequestBody MobileRecharge mobileRecharge) {
        return mobileRechargeService.createMobileRecharge(mobileRecharge);
    }

    @GetMapping("/get")
    public List<MobileRecharge> getAllMobileRecharges() {
        return mobileRechargeService.getAllMobileRecharges();
    }

    @GetMapping("/{id}")
    public Optional<MobileRecharge> getMobileRechargeById(@PathVariable Long id) {
        return mobileRechargeService.getMobileRechargeById(id);
    }

    @PutMapping("/{id}")
    public MobileRecharge updateMobileRecharge(@PathVariable Long id, @RequestBody MobileRecharge mobileRecharge) {
        return mobileRechargeService.updateMobileRecharge(id, mobileRecharge);
    }

    @DeleteMapping("/{id}")
    public void deleteMobileRecharge(@PathVariable Long id) {
        mobileRechargeService.deleteMobileRecharge(id);
    }
}
