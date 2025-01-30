# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah005
Feature: Negative Menambah Master Tag (tambah.tag.005)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data,Pada Tag Name diisi dengan karakter spesial
    Given Login B2B berhasil
    And Pergi ke menu Master
    And Pergi ke menu Core
    And Pergi ke menu Tag
    When Muncul list tag
    And Klik Create New
    And Mengisi semua data,Pada Tag Name diisi dengan karakter spesial
    Then Klik Save, data tidak berhasil disimpan