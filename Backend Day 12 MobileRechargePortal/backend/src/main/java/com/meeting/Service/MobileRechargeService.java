package com.meeting.Service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meeting.Modal.MobileRecharge;
import com.meeting.Repository.MobileRechargeRepository;

@Service
public class MobileRechargeService {

    private final MobileRechargeRepository mobileRechargeRepository;

    @Autowired
    public MobileRechargeService(MobileRechargeRepository mobileRechargeRepository) {
        this.mobileRechargeRepository = mobileRechargeRepository;
    }

    public MobileRecharge createMobileRecharge(MobileRecharge mobileRecharge) {
        return mobileRechargeRepository.save(mobileRecharge);
    }

    public List<MobileRecharge> getAllMobileRecharges() {
        return mobileRechargeRepository.findAll();
    }

    public Optional<MobileRecharge> getMobileRechargeById(Long id) {
        return mobileRechargeRepository.findById(id);
    }

    public MobileRecharge updateMobileRecharge(Long id, MobileRecharge updatedMobileRecharge) {
        Optional<MobileRecharge> existingMobileRecharge = mobileRechargeRepository.findById(id);
        if (existingMobileRecharge.isPresent()) {
            MobileRecharge mobileRecharge = existingMobileRecharge.get();
            mobileRecharge.setName(updatedMobileRecharge.getName());
            mobileRecharge.setNumber(updatedMobileRecharge.getNumber());
            mobileRecharge.setSim(updatedMobileRecharge.getSim());
            return mobileRechargeRepository.save(mobileRecharge);
        }
        return null;
    }

    public void deleteMobileRecharge(Long id) {
        mobileRechargeRepository.deleteById(id);
    }
}
