# Feature: Positive B2B Tambah Master City di menu Master > Core > City

#   Scenario: Login ke B2B dan tambah Master > Core > City
#     Given Saya login ke B2B dan ke Menu Master > Core > City
#     Then Saat save master city harus berhasil
@tambah
Feature: Menambah Master City

  Scenario: Menambahkan City Baru di Master City
    Given Loginnya berhasil
    And Pergi ke menu Master
    And Pergi ke menu Core
    And Pergi ke menu City
    When Saya melihat tampilan list city
    And Klik Create New di city
    And Isi data nya
    Then Klik Save , dan hasil berhasil