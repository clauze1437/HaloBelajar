import React from "react";
import NavLanding from "../components/NavLanding";
import HeaderLanding from "../components/HeaderLanding";
import TestiLanding from "../components/TestiLanding";
import BenefitLanding from "../components/BenefitLanding";
import FooterLanding from "../components/FooterLanding";

export default function LandingPage() {
    return (
        <div>
            <NavLanding />
            <HeaderLanding />
            <TestiLanding />
            <BenefitLanding />
            <FooterLanding />
        </div>
    )
}