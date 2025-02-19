@poslogin001
Feature: Negative User Login (login.b2b.006)

  Scenario: User Login B2B menggunakan email valid dan password kosong
    Given User mengunjungi website B2B QC - 006
    And User menginput email - 006
    And User tidak menginput password - 006
    And User mengklik button Sign In - 006
    Then User diarahkan ke dashboard - 006