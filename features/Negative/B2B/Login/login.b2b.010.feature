@poslogin001
Feature: Negative User Login (login.b2b.010)

  Scenario: User Login B2B menggunakan email  dan password akun nonaktif
    Given User mengunjungi website B2B QC - 010
    And User menginput email - 010
    And User menginput password - 010
    And User mengklik button Sign In - 010
    Then User diarahkan ke dashboard - 010