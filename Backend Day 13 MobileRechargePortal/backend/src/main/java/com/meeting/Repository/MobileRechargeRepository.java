package com.meeting.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.meeting.Modal.MobileRecharge;

@Repository
public interface MobileRechargeRepository extends JpaRepository<MobileRecharge, Long> {
}
