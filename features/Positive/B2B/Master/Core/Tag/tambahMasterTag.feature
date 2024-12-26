# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@tambah
Feature: Menambah Master Tag

  Scenario: Menambahkan Tag Baru di Master Tag
    Given Login berhasil
    And Pergi ke Master
    And Pergi ke Core
    And Pergi ke Tag
    When Saya melihat tampilan list tag
    And Klik Create New
    And Isi datanya
    Then Klik Save, dan hasil berhasil