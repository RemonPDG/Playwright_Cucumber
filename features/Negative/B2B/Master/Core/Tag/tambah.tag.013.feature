# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah013
Feature: Negative Menambah Master Tag (tambah.tag.013)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data dengan benar dan saat save klik buttonnya 2x
    Given Login B2B berhasil
    And Pergi ke menu Master
    And Pergi ke menu Core
    And Pergi ke menu Tag
    When Muncul list tag
    And Klik Create New
    And Mengisi semua data dengan benar dan saat save klik buttonnya 2x
    Then Klik Save, data tidak berhasil disimpan