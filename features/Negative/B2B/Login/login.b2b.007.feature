@poslogin001
Feature: Negative User Login (login.b2b.007)

  Scenario: User Login B2B menggunakan email kosong dan password yg benar
    Given User mengunjungi website B2B QC - 007
    And User tidak menginput email - 007
    And User menginput password - 007
    And User mengklik button Sign In - 007
    Then User diarahkan ke dashboard - 007