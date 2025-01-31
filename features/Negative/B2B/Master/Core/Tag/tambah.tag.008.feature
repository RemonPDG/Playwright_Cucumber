# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah008
Feature: Negative Menambah Master Tag (tambah.tag.008)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data ,Pada Tag Color di iisi kosong
    Given Login B2B berhasil - 008
    And Pergi ke menu Master - 008
    And Pergi ke menu Core - 008
    And Pergi ke menu Tag - 008
    When Muncul list tag - 008
    And Klik Create New - 008
    And Mengisi semua data ,Pada Tag Color di iisi kosong - 008
    Then Klik Save, data tidak berhasil disimpan - 008