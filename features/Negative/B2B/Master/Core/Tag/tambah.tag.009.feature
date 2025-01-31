# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah009
Feature: Negative Menambah Master Tag (tambah.tag.009)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data ,Pada Tag Color diisi dengan warna yang tidak valid
    Given Login B2B berhasil (009)
    And Pergi ke menu Master (009)
    And Pergi ke menu Core (009)
    And Pergi ke menu Tag (009)
    When Muncul list tag (009)
    And Klik Create New (009)
    And Mengisi semua data ,Pada Tag Color diisi dengan warna yang tidak valid (009)
    Then Klik Save, data tidak berhasil disimpan (009)